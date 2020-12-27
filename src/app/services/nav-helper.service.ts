import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {ROUTES_ENUM} from "../constants/routing.constants";

@Injectable({
  providedIn: "root"
})
export class NavHelperService {

  constructor(
    private router: Router,
  ) {
  }

  public goToDashboard(): void {
    this.goToRoute(ROUTES_ENUM.Dashboard);
  }

  public goToInfo(): void {
    this.goToRoute(ROUTES_ENUM.Info);
  }

  public goToProfile(): void {
    this.goToRoute(ROUTES_ENUM.Profile);
  }

  public goToAdmin(): void {
    this.goToRoute(ROUTES_ENUM.Admin);
  }

  public goToLogin(): void {
    this.goToRoute(ROUTES_ENUM.Login);
  }

  // BLOCK

  public goToBlockList(): void {
    this.goToRoute(ROUTES_ENUM.BlockList);
  }

  public goToGameSetup(): void {
    this.goToRoute(ROUTES_ENUM.GameSetup);
  }

  public goToGame(deckId: string): void {
    this.goToRoutes([ROUTES_ENUM.Game, deckId]);
  }

  public goToBlockDeckList(): void {
    this.goToRoute(ROUTES_ENUM.BlockDeckList);
  }

  // ADMIN

  public goToManageBlocks(): void {
    this.goToRoute(ROUTES_ENUM.ManageBlock);
  }

  public goToBlockDetails(id: string): void {
    this.goToRoutes([ROUTES_ENUM.BlockDetails, id]);
  }

  public goToBlockEdit(id: string): void {
    this.goToRoutes([ROUTES_ENUM.BlockForm, id]);
  }

  public goToBlockCreate(): void {
    this.goToRoute(ROUTES_ENUM.BlockForm);
  }

  public goToManageBlockDecks(): void {
    this.goToRoute(ROUTES_ENUM.ManageBlockDeck);
  }

  public goToBlockDeckDetails(id: string): void {
    this.goToRoutes([ROUTES_ENUM.BlockDeckDetails, id]);
  }

  public goToBlockDeckEdit(id: string): void {
    this.goToRoutes([ROUTES_ENUM.BlockDeckForm, id]);
  }

  public goToBlockDeckCreate(): void {
    this.goToRoute(ROUTES_ENUM.BlockDeckForm);
  }

  // GENERAL

  private goToRoute(route: string): void {
    this.goToRoutes([route]);
  }

  private goToRoutes(routes: string[]): void {
    this.router.navigate(routes);
  }
}
